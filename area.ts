function area(length: number, width: number): number {
    return length * width;
}

function perimeter(length: number, width: number): number {
    return 2.0 * (length + width);
}

function describeRectangle(length: number, width: number): void {
    console.log("length: " + length.toFixed(1));
    console.log("width: " + width.toFixed(1));
    console.log("area: " + area(length, width).toFixed(2));
    console.log("perimeter: " + perimeter(length, width).toFixed(2));
    console.log();
}

describeRectangle(3.0, 4.0);
describeRectangle(8.6, 5.1);
describeRectangle(13.2, 2.5);