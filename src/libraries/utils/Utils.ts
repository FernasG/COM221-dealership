export class Utils {
    async sleep(time: number): Promise<void> {
        setTimeout(() => { return true; }, time * 1000);
    }
}