// import {React, memo, useEffect, useState} from "react";
//
//
// function getSavedValue(key,initialValue)
// {
//     const savedValue = JSON.parse(localStorage.getItem(key));
//     if(savedValue) return savedValue
//     if(initialValue instanceof Function) return initialValue()
//     return initialValue
// }
// export default function useLocalstorage(key,initialValue)
// {
//     const [value,setValue]= useState(()=>
//     {
//         return getSavedValue(key,initialValue)
//     })
//     useEffect(() => {
//         localStorage.setItem(key,JSON.stringify(value))
//     },[value])
//     return [value,setValue];
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // const  Button= ({onclickhandle})=>
// // {
// //     console.log('button')
// //     useEffect(()=>
// //     {
// //         console.log("button component")
// //     },[])
// //     return(
// //         <div>
// //             <button onClick={onclickhandle}> SAVE</button>
// //
// //         </div>
// //     )
// // }
// // export default memo(Button)
//
//
//
// // .............................4 hooks........................
// // const [count,setCount] = useState(0);
// // const [dark,setDark] = useState(false);
// // const timer = useRef(0)
// // const square = useMemo(()=>
// // {
// //     return slowfunction(count)
// // },[count])
// // const themestyle = useMemo(()=>{
// //
// //
// //     return {
// //         backgroundColor: dark ? 'gray' : "black",
// //         color: dark ? "black" : "gray"
// //     }
// // },[dark]);
// //
// // const inputRef = useRef();
// // function focus(){
// //     inputRef.current.style.color = 'white'
// //     inputRef.current.style.backgroundColor = 'black'
// //
// // }
// // useEffect(() => {
// //     console.log('theme changed')
// // }, [themestyle]);
// // useEffect(()=>
// // {
// //     console.log('the ref counter is ')
// //     timer.current = timer.current+1
// // })
// // return(
// //     <div>
// //         <input value={count} onChange={event => setCount(event.target.value) }/><br/><br/>
// //         <button ref={inputRef}  onClick={()=>setCount(count+1)}>Counter</button>
// //         <h3 style={themestyle}>the Square Root of the value is {square}</h3>
// //         <button onClick={()=>setDark(!dark)}>Change back ground color</button>
// //         <br/><br/>
// //         <button onClick={focus}>change the animation of counter button</button>
// //         <div>this is a useref and value change on each render but this increment not rerendring the component {timer.current}</div>
// //     </div>
// // )
// // function slowfunction(num)
// // {
// //     for(let i=0;i<=1000000000;i++)
// //     {}
// //     return num*num;
// // }
// //..............................usememo................
// // import React, {useEffect, useMemo, useRef, useState} from "react";
// // export default function Tester() {
// //     const [number, setNumber] = useState(0)
// //     const [dark, setDark] = useState(false)
// //     const count = useRef(0)
// //     const themeStyle = useMemo(()=>{
// //         return{
// //             backgroundColor: dark ? 'white' : 'black',
// //             color: dark ? 'black' : 'white',
// //             width: 300
// //         }
// //     },[dark])
// //     const doubleNumber = useMemo(() => {
// //         return double(number)
// //     }, [number])
// //     useEffect(()=>{
// //         console.log(`theme changed`)
// //         count.current = count.current+1;
// //     })
// //     const inputRef = useRef()
// //     function focus()
// //     {
// //         inputRef.current.focus();
// //         inputRef.current.value = 'say hello'
// //         inputRef.current.style.color= 'red'
// //         inputRef.current.style.backgroundColor = 'yellow'
// //
// //
// //     }
// //     return (
// //         <div>
// //             <input value={number} ref={inputRef}  onChange={(e) => setNumber(e.target.value)}/><br/>
// //             <button onClick={() => setNumber(number + 1)}>Counter</button>
// //             <br/>
// //             <button  onClick={() => setDark(prevState => !prevState)} >Change Theme</button>
// //             <br/>
// //             <div style={themeStyle}>{doubleNumber}</div>
// //             <h1>{count.current}</h1>
// //             <button onClick={focus} ref={inputRef}>Focus</button>
// //         </div>
// //     )
// //
// //     function double(num) {
// //         // for (let i = 0; i <= 1000000000; i++)
// //
// //         return num * 2;
// //
// //
// //     }
// // }
//
// // ................................useEffect.................
//
// // const [type, setType] = useState('')
// // const [count, setCount] = useState(0)
// // // console.log('render');
// // useEffect(()=>{
// //     console.log('shift to numbers')
// //     return()=>{
// //         console.log("return")
// //     }
// // },[])
// // return(
// //     <div>
// //         <button onClick={()=>setType('post')}>Posts</button>
// //         <button onClick={()=>setType('user')}>Users</button>
// //         <button onClick={()=>setType('comment')}>Comments</button>
// //         <button onClick={()=>setCount(count+1)}>{count}</button>
// //         <h1>{type}</h1>
// //     </div>
// //
// // )
// //.............................Usestate Hook..........................
// //   const [value, setValue]= useState({count: 10, theme: 'red'})
// //     function decrement() {
// //         setValue(prevState => {
// //             return {
// //                 ...prevState, count: prevState.count - 1,
// //                     theme: 'yellow'
// //             }
// //         })
// //    }
// //     function increment(){
// //         setValue({...value,count:value.count+1,
// //             theme: 'gray'
// //         })
// //
// //     }
// //
// //
// //     return(
// //         <div>
// //             <button onClick={decrement}>-</button>
// //             <span>{value.count}</span>
// //             <span>{value.theme}</span>
// //             <button onClick={increment}>+</button>
// //         </div>
// //     )