/**
 * 高阶函数（High-order function）
 */
const heigh_order = (callback: Function) => {
    return () => {
        return "接受其他函数作为参数或返回其他函数"
    }
}

/**
 * 柯里化（currying）
 */
const curring  = (firstName: string) => (lastName: string) => firstName + " " + lastName;

/**
 * 函数合成（Function synthesis）
 */
const synthesis = (f: Function) => (g: Function) => (x: any) => f(g(x));
const synthesis_res = synthesis((x: number) => x + 2)((y: number) => y + 1)(1);

/**
 * 参数倒置（filp）
 */
const filp = function (callback: Function) { 
    return callback([...arguments].reverse())
 }
