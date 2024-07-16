class HandleContasAReceber {

    dateDifference(date1: number | Date | any, date2: number | Date | any) {
        const diffInMilliseconds = Math.abs(date2 - date1);
        const diffInSeconds = diffInMilliseconds / 1000;
        const diffInMinutes = diffInSeconds / 60;
        const diffInHours = diffInMinutes / 60;
        const diffInDays = diffInHours / 24;
        const diffInMonths = diffInDays / 30.436875;
        const diffInYears = diffInMonths / 12;
        return {
            diffInMilliseconds,
            diffInSeconds,
            diffInMinutes,
            diffInHours,
            diffInDays,
            diffInMonths,
            diffInYears
        };
    }

}

export { HandleContasAReceber }