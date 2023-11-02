const checkDrivingAccess = (hasLicense, age, isDrunk) => {
  return hasLicense && age >= 18 && !isDrunk;
};

console.log(`Можно водить машину: ${checkDrivingAccess(true, 20, false)}`);
console.log(`Можно водить машину: ${checkDrivingAccess(false, 20, false)}`);
console.log(`Можно водить машину: ${checkDrivingAccess(true, 20, true)}`);
console.log(`Можно водить машину: ${checkDrivingAccess(true, 16, false)}`);
