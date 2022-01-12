export default `const submit = () => {
    add(clean(next))
    setNext('')
}
const add = (str) => {
    if (str !== '' && !arr.includes(str))
        setArr([...arr, str])
}

const keyPress = (e) => {
    if (e && e.key && e.key === 'Enter') {
        submit(next)
    }
}`