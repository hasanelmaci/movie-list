import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

function WatchListItems() {
  const [items, setItems] = useState("{}");
  const [localkeys, setLocalKeys] = useState([]);
  const [localLoad, setLocalLoad] = useState(false);
  const [localLength, setLocalLength] = useState(localkeys.length);

  const listItem = JSON.parse(items);

  const effectDelete = (key) => {
    let keyIndex = localkeys.indexOf(key);
    setLocalKeys(localkeys.splice(keyIndex, 1));
    setLocalLength(localLength - 1);
  };

  useEffect(() => {
    let localItems = localStorage.length;
    let itemCountList = [];
    for (var i = 0; i < localItems; i++) {
      itemCountList.push(i);
      setLocalKeys(itemCountList);
    }
    setLocalLoad(true);
  }, [localLength]);

  return (
    <div className="watchlist_items">
      {localLoad === true
        ? localkeys.map((item) => (
            <ListCard key={item} itemkey={item} effectDelete={effectDelete} />
          ))
        : null}
    </div>
  );
}

export default WatchListItems;
