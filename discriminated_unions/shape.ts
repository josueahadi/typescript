type Rectangle = {
    kind: 'rectangle';
    width: number;
    length: number; 
}

type Triangle = {
    kind: 'triangle';
    base: number;
    height: number;
}

type Square = {
    kind: 'square';
    sideLength: number;
}

type Circle = {
    kind: 'circle';
    radius: number;
}

type Shape = Rectangle | Square | Circle | Triangle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
    case 'circle':
        return Math.PI * shape.radius ** 2;
    case 'square':
        return shape.sideLength ** 2;
    case 'triangle':
        return (shape.base * shape.height) / 2;
    case 'rectangle':
        return (shape.width * shape.length);
    default:
        throw new Error('Invalid shape!');
    }
}


calculateArea({kind: 'circle', radius: 12});

