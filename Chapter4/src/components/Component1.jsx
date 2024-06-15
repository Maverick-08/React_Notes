// 1. Create a store/atoms folder 
// 2. Create a js/jsx file for exporting atom
// export const <atomName> = atom({key:"atomName",default:})
// 3. Inorder to teleport values wrap the component in <RecoilRoot></>
// 4. useRecoilValue, useSetRecoilState, or [count,setCount] = useRecoilState
// 5. If there is a variable that is depenedent on an atom we use selector
// export const <variable> = selector(key:"variable",get:
// ({get})=>{ let count = get(coutAtom) return count%2==0 })

import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, isEvenSelector } from "../store/atoms/count";

export default function Component1() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
    console.log("Count")
  return (
    <div>
      <CountRenderer />
      <EvenRenderer />
      <Buttons />
    </div>
  );
}

function EvenRenderer(){
    // 1. useMemo since one value is dependent on a state variable
    // 2.śelector
    const isEven = useRecoilValue(isEvenSelector)

    return(<div>
        {isEven?"It is Even":null}
    </div>)
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  console.log("CountRenderer")
  return (
    <div>
      {count}
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("Buttons")
  return (
    <div>
      <button onClick={() => setCount(count=>count+1)}>Increase</button>
      <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
    </div>
  );
}
