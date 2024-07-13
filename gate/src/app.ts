// const setRange = (range: number): boolean => {
//     const x = range[0];
//     const y = range[1];

//     return {x, y}
//   };
  
//   setRange([true, "10"]);


type RangeXY = {
    x: boolean;
    y: string ;
}

const setRange = (range: [boolean, string]): RangeXY=> {
    const x = range[0];
    const y = range[1];

    return {x,y}
};

setRange([true, "10"]);