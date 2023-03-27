import { useState } from "react";

const Bai3 = () => {
    const [sum1,setSum1] = useState()
    const [sum2,setSum2] = useState()

    const onChange = (e) => {
        //Cách 1
        const arrNum = e.target.value.split("");
        let sum1 = 0;
        arrNum.map(item => {
            sum1 += Number(item)
        })
        setSum1(sum1)

        //Cách 2
        let num = e.target.value;
        let sum2= 0;
        while(num>0){
            sum2 += num%10;
            num = (Math.floor(num/10));
            console.log(sum2);
        }
        setSum2(sum2)
    }

  return (
    <div>
        <input name="number" onChange={onChange}/>
        <div>Cách 1: {sum1}</div>
        <div>Cách 2: {sum2}</div>
    </div>
  );
};

export default Bai3;
