export default class TimeUtil {
    private static time: Date = new Date();

    /**
     * 
     * @returns 获取当前时间Date格式
     */
    public static getNow = (): Date => {
        return TimeUtil.time;
    }

    // 获取现在是什么时候
    public static getDusgsum = () => {
        const hour: number = TimeUtil.time.getHours();
        if (hour <= 6) {
            return "凌晨";
        } else if (hour <= 11 && hour > 6) {
            return "上午";
        } else if (hour > 11 && hour <= 13) {
            return "中午";
        } else if (hour > 13 && hour <= 18) {
            return "下午";
        } else {
            return "晚上";
        }
    };

    /**
     * 将Date转换成 yyyy-MM-dd hh:mm:ss 日期时间描述字符串
     * @param date
     * @returns 
     */
    public static formatDateToSecond = (date: Date) => {
        if (date == null) {
            return "";
        }
        const { year, month, day, hour, minute, second } = TimeUtil.changeDateToStringObj(date);
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    };

    /**
     * 将Date转换成 yyyy年MM月dd日 日期时间描述字符串
     * @param date
     * @returns 
     */
     public static formatDateToDay = (date: Date) => {
        if (date == null) {
            return "";
        }
        const { year, month, day} = TimeUtil.changeDateToStringObj(date);
        return `${year}年${month}月${day}日`;
    };

    /**
     * 将日期时间转换为年月日时分秒字符串对象
     * @param date
     * @returns
     */
    public static changeDateToStringObj = (date: Date): any => {
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');
        return { year, month, day, hour, minute, second };
    };
}