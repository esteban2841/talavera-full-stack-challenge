import { CustomText } from "./CustomText"

const Account = () => {
  return (
    <div style={{
        height: "100%"
    }} className="w-full text-black flex flex-col justify-between items-center">
        <div className="flex flex-col justify-start items-center">
            <span>
                <CustomText type="catalog" content="My holdings"/>
            </span>
            <span>
                <CustomText type="catalog" content="Balance"/>
            </span>
            <span>
                <CustomText type="catalog" content="Stocks"/>
            </span>
        </div>
        <div className="flex flex-col justify-start items-center">
            <span>
                <CustomText type="catalog" content="Contact"/>
            </span>
            <span>
                <CustomText type="catalog" content="Logout"/>
            </span>

        </div>
    </div>
  )
}

export default Account
