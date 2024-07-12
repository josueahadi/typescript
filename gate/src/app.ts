
// const setRange = (range: number): boolean => {
//     const x = range[0];
//     const y = range[1];

//     return [1,2,4]
//   };
  
//   setRange([true, "10"]);


type myObject = {
    [key: string]: string | boolean;
}

const setRange = (range: (boolean | string)[]): {}=> {
    const x = range[0];
    const y = range[1];

    return {x,y}
  };
  
  setRange([true, "10"]);