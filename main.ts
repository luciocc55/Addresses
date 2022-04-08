import axios from 'axios'
import { ValidatorFull } from './validator.interface'
const openswapValidatorAddress = `one1j35d0vd4uzwffeawjjfukn8t9wjt8csungj0z0`

getAccounts().then((result)=>{
    // Use data here it returns arrays of 
    /*{
        address: 'one1dqm6nv6vfa8ks7mnprnchzsk6zggk9zcs44al7',
        amount: 99999
    } */
    console.log(result)
})
async function getAccounts(){
    const data: {data: ValidatorFull} = await axios.get(`https://api.stake.hmny.io/networks/mainnet/validators/${openswapValidatorAddress}`, {})
    const delegators = data.data.delegations.map((element)=> {
        return {
            address: element['delegator-address'], 
            amount:parseInt((parseFloat(element.amount) / (10 ** 18)).toString())
        }
    }).filter((element)=> element.amount > 1000)
    return delegators
}
