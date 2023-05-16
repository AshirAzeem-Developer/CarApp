import { useState } from "react";

export default function AAZSearchBar(props) {
  const { searchList, label, onSearch, className } = props;
  const [search, setSearch] = useState("")

  const [selected, setSelected] = useState("");

  let searchVal = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <div className="d-flex  rounded searchBox ">
        <div className="w-100">
          <input
            className={className}
            onChange={searchVal}
            placeholder={label ?? "Search ..."}
          />
        </div>
        {/* <div>
          <select
            className="searchSelect"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select</option>
            {searchList.map((x, i) => (
              <option key={i} value={x.id}>
                {x.carName}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </>
  );
}