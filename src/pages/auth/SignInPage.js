import React from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignInLayout from "../../layout/SignInLayout";
import SignInContainer from "../../containers/auth/SignInContainer";

function SignInPage() {
    return (
        <SignInLayout>
            <SignInContainer />
        </SignInLayout>
    );
}

export default SignInPage;