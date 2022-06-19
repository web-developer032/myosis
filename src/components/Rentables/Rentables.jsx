import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Rentables.css";
import Rentable from "./Rentable.jsx";
import { RentableContext } from "../../Contexts/RentablesContext";

function Rentables() {
    const { rentables, setUserData } = useContext(RentableContext);
    const [searchParams, setSearchParams] = useSearchParams();

    let back = Boolean(searchParams.get("back"));

    const [rentablesArray, setRentablesArray] = useState([...rentables]);

    function handleSort(e) {
        let value = e.target.value;
        if (value === "led" || value === "color") {
            setRentablesArray([
                ...rentablesArray.sort((a, b) => {
                    if (a[value]) return -1;
                    else return 1;
                }),
            ]);
            // rentables.sort((a, b) => {
            //     if (a[value]) return -1;
            //     else return 1;
            // });
            return;
        }

        if (value === "l-h") {
            setRentablesArray([...rentablesArray.sort((a, b) => a.price - b.price)]);
            // rentables.sort((a, b) => a.price - b.price);
            return;
        }

        if (value === "h-l") {
            setRentablesArray([...rentablesArray.sort((a, b) => b.price - a.price)]);
            // rentables.sort((a, b) => b.price - a.price);
            return;
        }

        if (value === "size") {
            setRentablesArray([
                ...rentablesArray.sort(
                    (a, b) => parseFloat(a.size.split("M")[0]) - parseFloat(b.size.split("M")[0])
                ),
            ]);
            // rentables.sort((a, b) => b.price - a.price);
            return;
        }
    }

    return (
        <main className="container" id="rentables-container">
            <div className="rentables-details">
                <span className="result">showing 1 - 3 of {rentables.length} results </span>

                <select name="filter-rentables" id="filter-rentables" onChange={handleSort}>
                    <option value="none">SORT BY: NONE</option>
                    <option value="led">SORT BY: LED</option>
                    <option value="color">SORT BY: COLOR</option>
                    <option value="size">SORT BY: SIZE</option>
                    <option value="l-h">SORT BY: PRICE LOW/HIGH</option>
                    <option value="h-l">SORT BY: PRICE HIGH/LOW</option>
                </select>
            </div>

            <section className="rentables">
                {rentablesArray.map((rentable, i) => (
                    <Rentable rentable={rentable} key={rentable.id} back={back && i === 0} />
                ))}
            </section>
        </main>
    );
}

export default Rentables;
