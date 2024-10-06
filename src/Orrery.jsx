import { useEffect, useRef, useState } from "react";
import "./Orrery.css";
import { handleSpeedChange, handlePlanetsCheckbox, handleAsteroidsCheckbox, loadOrrery } from "./script.js";

export default function Orrery() {
    const [speed, setSpeed] = useState(1);
    const [checkboxesChecked, setCheckboxesChecked] = useState([true, true]);
    const speedLabelRef = useRef();
    const planetsCheckboxRef = useRef();
    const asteroidsCheckboxRef = useRef();

    useEffect(() => {
        async function waiterFunction() {
            await loadOrrery();
        }
        waiterFunction();
    }, []);

    function handleSliderChange(e) {
        setSpeed(e.target.value);
        handleSpeedChange(e, speedLabelRef.current);
    }


    return (
        <div className="orrery">
            <div className="speed-controller">
                <label htmlFor="speedRange">Speed: </label>
                <input
                    type="range"
                    id="speedRange"
                    min="-10"
                    max="10"
                    step="1"
                    value={speed}
                    onInput={handleSliderChange}
                />
                <span
                    className="speedValue"
                    ref={speedLabelRef}
                >
                    1
                </span>
            </div>
            <div className="dropdown-wrapper">
                <div className="dropdown">
                    <button className="dropbtn">Select Options</button>
                    <div className="dropdown-content">
                        <label><input
                            className="planet-orbits"
                            type="checkbox"
                            value="Option 1"
                            defaultChecked
                            onChange={() => {
                                const newCheckBoxesChecked = checkboxesChecked;
                                newCheckBoxesChecked[0] = !checkboxesChecked[0];
                                setCheckboxesChecked(newCheckBoxesChecked);
                                handlePlanetsCheckbox(planetsCheckboxRef.current)
                            }}
                            ref={planetsCheckboxRef}
                        />
                            Planet Orbits
                        </label>
                        <label><input
                            className="asteroid-orbits"
                            type="checkbox"
                            value="Option 2"
                            defaultChecked
                            onChange={() => {
                                const newCheckBoxesChecked = checkboxesChecked;
                                newCheckBoxesChecked[1] = !checkboxesChecked[1];
                                setCheckboxesChecked(newCheckBoxesChecked);
                                handleAsteroidsCheckbox(asteroidsCheckboxRef.current);
                            }}
                            ref={asteroidsCheckboxRef}
                        />
                            Asteroid Orbits
                        </label>
                        <label><input
                            className="ph-asteroid-orbits"
                            type="checkbox"
                            value="Option 3"
                        />
                            Potentially Hazardous Asteroid Orbits
                        </label>
                        <label><input type="checkbox" value="Option 4" /> Option 4</label>
                    </div>
                </div>
            </div>
        </div>
    );
}