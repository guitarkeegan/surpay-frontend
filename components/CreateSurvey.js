import { useWeb3Contract } from "react-moralis";
import {abi, contractAddresses} from "../constants";
import {useMoralis, isWeb3Enabled} from "react-moralis";
import { useEffect } from "react";
import {ethers} from "ethers";

export default function CreateSurvey(){
    const {chainId: chainIdHex} = useMoralis();
    const chainId = parseInt(chainIdHex);
    const surpayAddress = chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null;
    const [ surveyCreationFee, setSurveyCreationFee ] = useState("0");

    const {runContractFunction: createSurvey} = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "createSurvey",
        params: {

        },
        msgValue: setEntranceFee
    })

    const {runContractFunction: getSurveyCreationFee} = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "getSurveyCreationFee",
        params: {

        },
    })

    useEffect(()=>{
        if(isWeb3Enabled){
            async function updateUI(){
                const surveyCreationFeeFromCall = (await getSurveyCreationFee()).toString();
                setEntranceFee(surveyCreationFeeFromCall);
            }
        }
    }, [isWeb3Enabled])

    return (
        <div>
        hi from survey creation !!
        {surpayAddress ?
            (<div>
            <button onClick={async function(){await createSurvey()}}>Create Survey</button>
            Creation Fee: {ethers.utils.formatUnits(surveyCreationFee, "ether")} ETH</div>)
            :
            (
                <div>No surpay address detected</div>
            )

         }
            
        </div>
    )

}