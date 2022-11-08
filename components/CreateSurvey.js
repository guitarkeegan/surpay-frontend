import {abi, contractAddresses} from "../constants";
import {useMoralis, useWeb3Contract} from "react-moralis";
import { useEffect, useState } from "react";
import {ethers} from "ethers";
import { useNotification } from "web3uikit";

export default function CreateSurvey(){
    const {chainId: chainIdHex, isWeb3Enabled, Moralis} = useMoralis()
    const chainId = parseInt(chainIdHex)
    // console.log(chainId)
    const surpayAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [ surveyCreationFee, setSurveyCreationFee ] = useState("0")

    const dispach = useNotification()

   
    const surveyId = "1"
    const companyId = "1"
    const totalPayoutAmount = ethers.utils.parseEther("0.1")
    const numOfParticipantsDesired = 2
    console.log(totalPayoutAmount.toString());

    const {runContractFunction: createSurvey} = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "createSurvey",
        //hardcoded for now...
        params: {
            _surveyId: surveyId,
            _companyId: companyId,
            _totalPayoutAmount: totalPayoutAmount,
            _numOfParticipantsDesired: numOfParticipantsDesired
        },
        msgValue: totalPayoutAmount.add(surveyCreationFee)
    })

    const {runContractFunction: getSurveyCreationFee} = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "getSurveyCreationFee",
        params: {},
    })

    async function updateUI(){
        const surveyCreationFeeFromCall = (await getSurveyCreationFee()).toString();
        setSurveyCreationFee(surveyCreationFeeFromCall);
    }

    useEffect(()=>{
        if(isWeb3Enabled){
            updateUI();
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        await tx.wait(1)
        handleNewNotification(tx)
    }

    const handleNewNotification = () => {
        dispach({
            type: "info",
            message: "Transaction Complete",
            title: "Tx Notification",
            position: "topR",
            icon: "bell"
        })
    }

    return (
        <div>
        hi from survey creation !!
        {surpayAddress ?
            (<div>
            <button onClick={async function(){await createSurvey({
                onSuccess: handleSuccess,
                onError: (e) => console.log(e)
            })}}>Create Survey</button>
            Creation Fee: {ethers.utils.formatUnits(surveyCreationFee, "ether")} MATIC</div>)
            :
            (
                <div>No surpay address detected</div>
            )

         }
            
        </div>
    )

}