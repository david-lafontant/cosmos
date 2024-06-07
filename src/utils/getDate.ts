
// Get today date and the 

export function getDate(){
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate();
  const before = new Date(year, month - 2, day);
  const todayDate = today.toISOString().split('T')[0];
  const oneYearago = before.toISOString().split('T')[0]
  return {oneYearago, todayDate };
}
