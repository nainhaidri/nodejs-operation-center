const Axios = require('axios').default;
exports.getWholesalers = async (req, res) => {
    let response = await Axios.post(process.env.WHOLESALER_URL+"auth/sign-in", {
                        phone: process.env.WHOLESALER_PHONE,
                        password: process.env.WHOLESALER_PASS,
                        isAdmin: true
                    });

    res.json({status: response.status});
};