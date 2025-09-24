import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { addRandom } from "../store/silce/numberSlice";

export default function RandomNumberList() {
  const list = useSelector((state: RootState) => state.numbers.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>List number: [{list.join(",")}]</h2>
      <button onClick={() => dispatch(addRandom())}>Random number</button>
    </div>
  );
}
