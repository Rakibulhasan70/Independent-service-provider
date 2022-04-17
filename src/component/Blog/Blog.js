import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h4 className='mt-3'>Qus:1 .. What is the difference of authorization and authentication</h4>
                <p>Ans:
                    <br />
                    1.Authentication is the proceses which verifying anyone but authorization is the proceses which veryfing specific user,application
                    <br />
                    2. Authentication s visiable but Authorization is not visiable
                    <br />
                    3.Authentication is the first step for access website,page,management sector but  Authorization is always give access after authentication </p>
            </div>
            <div>
                <h4>Qus:2.. Why are you using firebase?What other options do you have to implement authentication?</h4>
                <p>Ans:
                    <br />
                    Firebase is most popular and usuable authentication
                    system.Firebase allow implement some texting project.Which is so much benefitial.If you want texting google,facebook,github,twiter authentication full free.I like to use firebase authentication.
                    <br />
                    There are some alternative authentication system without firebase. Which is
                    <br />
                    1.Okta
                    <br />
                    2.Auth0
                    <br />
                    3.Passport
                    <br />
                    4.Keycloak
                </p>
            </div>
            <div>
                <h4>Qus:3.. What other services does firebase provide other than authentication</h4>
                <p>Ans:
                    <br />
                    1.Cloud Firestore
                    <br />
                    2.Cloud Functions
                    <br />
                    3.Authentication
                    <br />
                    4.Hosting
                    <br />
                    5.Cloud Storage
                    <br />
                    6.Google Analytics
                    <br />
                    7.Predictions
                    <br />
                    8.Cloud Messaging
                    <br />
                    9.Dynamic Links
                    <br />
                    10.Remote Config
                </p>
            </div>
        </div>
    );
};

export default Blog;