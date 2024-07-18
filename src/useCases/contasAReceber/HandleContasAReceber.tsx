import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

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
    };
    newData() {
        const data = new Date();
        const day = data.getUTCDate();
        const year = data.getFullYear();
        const month = data.getMonth() + 1;
        const H = data.getHours();
        const M = data.getMinutes();
        const S = data.getSeconds();
        return day + '-' + month + '-' + year + ' ' +
            H + ':' + M + ':' + S
    };
    formatDate(date: string) {
        return format(parseISO(date), "dd ' ' MMM ' ' yyyy ' ' HH:mm'h'", {
            locale: ptBR
        })
    }
}

export { HandleContasAReceber }