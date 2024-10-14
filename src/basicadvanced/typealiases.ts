type Coordinate = [number, number]
type List = string[][]


// Function to calculate the distance between two points


function compareCoords(
    p1: Coordinate,
    p2: Coordinate
    // return value
): Coordinate {
    return [p1[0], p2[1]]
}

const coords: Coordinate = [1, 2]


// Function to convert a list of coordinates into a list of distances

// function calculateDistances(coords: Coordinate[]): List {
//     return coords.map(coord =>
//         coords.map(compareCoords)
//             .filter((_, index) => index !== coords.indexOf(coord))
//             .map(distance => Math.sqrt(Math.pow(distance[0] - coord[0], 2) + Math.pow(distance[1] - coord[1], 2)))
//     )
// }