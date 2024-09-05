export const timing=(slot)=> {
    const timeSlot = parseInt(slot);
    if (parseInt(slot) > 12) {
      const realTime = parseInt(slot) - 12;
      return `${realTime}:00 PM to ${realTime + 1}:00 PM`;
    }
    if (parseInt(slot) === 12) {
      return `${slot}:00 AM to 01:00 PM`;
    }
    return `${timeSlot}:00 AM to ${timeSlot + 1}:00 AM`;
  }