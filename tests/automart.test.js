import chai, {expect} from "chai";
import chaiHttp from "chai-http";
import app from "./../server";
//  .set('Authorization', )


const userToken = 'dfldfjalaglaafldjfjdjfd'
chai.use(chaiHttp);
describe("(1) Auth", () => {
    describe("Signup ", () => {
        it("it hould return 200 when user account is created", (done) => {
            const signUpData = {
                "email": "mohamed@gggggggggggggggmaillast.com",
                "first_name": "mooooo",
                "last_name": "mohamed",
                "address": "mohamed",
                "is_admin": true,
                "password": "mohamed11"
            }

            chai
                .request(app)
                .post("/api/v1/auth/signup")
                .send(signUpData)
                .end((error, res) => {
                    console.log(res.body);
                    expect(res.body.status).to.be.equal(201);
                    done();
                });
        });
    });
});
