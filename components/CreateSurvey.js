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

    const {runContractFunction: createSurvey, isFetching, isLoading} = useWeb3Contract({
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
        updateUI();
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
        <div className="p-5">
            <h1 className="py-4 px-4 font-bold text-3xl">Create Survey</h1>
            {surpayAddress ? (
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async () =>
                            await createSurvey({
                                // onComplete:
                                // onError:
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Create Survey"
                        )}
                    </button>
                    <div>Entrance Fee: {ethers.utils.formatUnits(surveyCreationFee, "ether")} Matic</div>
                </>
            ) : (
                <div>Please connect to a supported chain </div>
            )}
        </div>
    )

}