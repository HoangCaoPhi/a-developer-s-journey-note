// Thời điểm cụ thể
const date = new Date('2024-07-25T10:40:00Z'); // ISO 8601 format
const timestampInMilliseconds = date.getTime(); // milliseconds

// Chuyển đổi thành nanoseconds
const timestampInNanoseconds = BigInt(timestampInMilliseconds) * BigInt(1e6);

console.log(timestampInNanoseconds.toString());
