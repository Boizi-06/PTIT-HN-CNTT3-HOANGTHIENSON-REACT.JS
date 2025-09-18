// Khai báo enum
enum WeekDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// In ra tất cả các ngày
for (const day in WeekDays) {
    if (isNaN(Number(day))) { // Loại bỏ key dạng số
        console.log(day);
    }
}
