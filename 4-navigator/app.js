const calcDistance = (lat1, long1, lat2, long2) => {
  return Math.sqrt((lat2 - lat1) ** 2 + (long2 - long1) ** 2);
};

console.log(calcDistance(5, 5, 20, 16));
