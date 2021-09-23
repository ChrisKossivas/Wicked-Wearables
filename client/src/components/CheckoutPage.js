import React from "react";
import styled from "styled-components";
import cat from "./404_Cat.jpeg";

export default function CheckoutPage() {
  return (
    <Wrapper>
      <CustomerInfoWrapper>
        <Form>
          <H2>Customer information</H2>

          <Label htmlFor="firstName">First name</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.firstName}
            name="firstName"
            placeholder="Enter your first name, Rony?"
            required
          />

          <Label>Last name</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.lastName}
            name="lastName"
            placeholder="Enter your last name"
            required
          />

          <Label>Email</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.email}
            name="email"
            placeholder="Enter your email"
            required
          />

          <H2>Shipping details</H2>

          <Label htmlFor="shippingName">Full name</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.shippingName}
            name="shippingName"
            placeholder="Enter your shipping full name"
            required
          />

          <Label>Street address</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.shippingStreet}
            name="shippingStreet"
            placeholder="Enter your street address"
            required
          />

          <Label>City</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.shippingCity}
            name="shippingCity"
            placeholder="Enter your city"
            required
          />

          <Label>Postal/Zip code</Label>
          <Input
            type="text"
            // onChange={this.handleFormChanges}
            // value={this.state.shippingPostalZipCode}
            name="shippingPostalZipCode"
            placeholder="Enter your postal/zip code"
            required
          />

          <Label>Country</Label>
          <Select>
            <option>Country</option>
            <option>Canada</option>
          </Select>
          <Label htmlFor="shippingStateProvince">Province</Label>
          <Select>
            <option>Province</option>
            <option>Quebec</option>
          </Select>
          <H2>Payment information</H2>

          <Label htmlFor="cardNum">Credit card number</Label>
          <Input
            type="text"
            name="cardNum"
            // onChange={this.handleFormChanges}
            // value={this.state.cardNum}
            placeholder="Enter your card number"
          />

          <Label htmlFor="expMonth">Expiry month</Label>
          <Input
            type="text"
            name="expMonth"
            // onChange={this.handleFormChanges}
            // value={this.state.expMonth}
            placeholder="Card expiry month"
          />

          <Label htmlFor="expYear">Expiry year</Label>
          <Input
            type="text"
            name="expYear"
            // onChange={this.handleFormChanges}
            // value={this.state.expYear}
            placeholder="Card expiry year"
          />

          <Label htmlFor="ccv">CCV</Label>
          <Input
            type="text"
            name="ccv"
            // onChange={this.handleFormChanges}
            // value={this.state.ccv}
            placeholder="CCV (3 digits)"
          />

          <Button
          // onClick={this.handleCaptureCheckout}
          >
            Confirm order
          </Button>
        </Form>
      </CustomerInfoWrapper>
      {/* here we display the Cart information */}
      <CurrentCartWrapper>
        <>
          <div>
            <H2>Order summary</H2>
            {/* {cart.line_items.map((lineItem) => ( */}
            <Footer>
              <div>
                <Item>CaTmin Vivofit Fitness Bracelet</Item>
                <Item>garmin</Item>
                <Item>total: 100$</Item>
                <Item>Qty: 3</Item>
              </div>
              <p>
                <Img src={cat} alt="image" />
              </p>
            </Footer>
            {/* ))} */}
            <div></div>
          </div>
        </>
      </CurrentCartWrapper>
    </Wrapper>
  );
}

const Footer = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 25px;
`;
const CurrentCartWrapper = styled.div`
  border: 3px solid var(--color-paleGreen);
  border-radius: 10px;
  width: 45%;
  margin-left: 50px;
`;
const CustomerInfoWrapper = styled.div`
  width: 50%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border-radius: 10px;
  border: 3px solid var(--color-pink);
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;
const Select = styled.select`
  border-radius: 10px;
  border: 3px solid var(--color-pink);
  font-family: "Raleway", sans-serif;
`;

const Label = styled.label`
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
`;

const H2 = styled.h3`
  padding-bottom: 50px;
  padding-top: 25px;
  color: var(--color-darkTurq);
  font-family: "Raleway", sans-serif;
`;
const Button = styled.button`
  background-color: var(--color-darkTurq);
  border-radius: 10px;
  margin-top: 25px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
`;

const Item = styled.p`
  padding-left: 50px;
`;

const Img = styled.img`
  width: 200px;
  height: 80px;
  padding-left: 50px;
`;
