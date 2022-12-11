import { abi, contractAddresses } from "../../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"
import Button from "react-bootstrap/Button"
import styles from "../../styles/FormStyles.module.css"


export default function CreateSurveyLogic({ distributor, surveyDetails, cards }) {
    const { chainId: chainIdHex, isWeb3Enabled, Moralis } = useMoralis()
    const chainId = parseInt(chainIdHex)
    // console.log(chainId)
    const surpayAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [surveyCreationFee, setSurveyCreationFee] = useState("0")

    const dispach = useNotification()

    const { id, name } = distributor
    console.log(id, name)
    // call api to create new survey
    // console.log(createdSurvey, qAndA)
    // fetch("/api/survey/update/distributer", )

    const [surveyId, setSurveyId] = useState("") // 1
    const [totalPayoutAmount, setTotalPaymentAmount] = useState(ethers.utils.parseEther("0.1"))
    //not more than 0.1 for tests
    const [numOfParticipantsDesired, setNumOfParticipantsDesired] = useState(2) // use 2
    // console.log(totalPayoutAmount.toString())

    const handleCreateSurvey = async function () {
        const { surveyTitle, numOfTakers, fundingAmount } = surveyDetails

        setTotalPaymentAmount(ethers.utils.parseEther(fundingAmount.toString()))
        setNumOfParticipantsDesired(numOfTakers)
        // TODO: make call to DB and create new survey and get survey ID
        try {
            const surveyId = await fetch("/api/survey/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    surveyTitle: surveyTitle,
                    number_of_takers_desired: numOfTakers,
                    total_payout: fundingAmount,
                    company_id: id,
                    survey_is_funded: true,
                    rawQa: cards,
                }),
            })
            setSurveyId(surveyId.toString())
            
        } catch (error) {
            console.log(error)
        }

    }

    const {
        runContractFunction: createSurvey,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "createSurvey",

        params: {
            _surveyId: surveyId,
            _companyId: id,
            _totalPayoutAmount: totalPayoutAmount,
            _numOfParticipantsDesired: numOfParticipantsDesired,
        },
        msgValue: totalPayoutAmount.add(surveyCreationFee),
    })

    const { runContractFunction: getSurveyCreationFee } = useWeb3Contract({
        abi: abi,
        contractAddress: surpayAddress, // get the chainID
        functionName: "getSurveyCreationFee",
        params: {},
    })

    async function updateUI() {
        const surveyCreationFeeFromCall = (await getSurveyCreationFee()).toString()
        // get total payout from local storage
        // localStorage.getItem()
        setSurveyCreationFee(surveyCreationFeeFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        await tx.wait(1)
        handleNewNotification(tx)
        updateUI()
    }

    const handleNewNotification = () => {
        dispach({
            type: "info",
            message: "Transaction Complete",
            title: "Tx Notification",
            position: "topR",
            icon: "bell",
        })
    }

    return (
        <div className="">
            {surpayAddress ? (
                <>
                    <Button
                        onClick={async () =>
                            await handleCreateSurvey({
                                onComplete: async () => createSurvey,
                                // onError:
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }
                        className={styles.completeSurveyButton}
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Create Survey"
                        )}
                    </Button>

                    <div className="text-center">
                        Creation Fee: {ethers.utils.formatUnits(surveyCreationFee, "ether")} Matic
                    </div>
                </>
            ) : (
                <div>Please connect to a supported chain </div>
            )}
        </div>
    )
}
