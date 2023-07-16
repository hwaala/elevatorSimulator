function visitFloors(floorsToVisit: number[]): [number, number[]] {
  if (floorsToVisit.length === 0) {
    throw new Error('Invalid floors to visit: Floors to visit must be an array of length one or greater.')
  }

  if (floorsToVisit.some((floor) => floor < 0)) {
    throw new Error('Invalid floor: Negative floors are not allowed.');
  }

  const travelTimePerFloor = 10;
  const startingFloor = floorsToVisit[0];
  const floorsVisited: number[] = [startingFloor];
  let currentFloor = startingFloor
  let totalTravelTime = 0;

  for (let i = 1; i < floorsToVisit.length; i++) {
    const floor = floorsToVisit[i];
    const travelDistance = Math.abs(currentFloor - floor);
    const travelTime = travelDistance * travelTimePerFloor;
    totalTravelTime += travelTime;
    currentFloor = floor;
    floorsVisited.push(floor);
  }

  return [totalTravelTime, floorsVisited];
}
export { visitFloors }