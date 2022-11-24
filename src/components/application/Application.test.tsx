import { screen, render } from "@testing-library/react";
import { Application } from "./Application";

describe('renders component correctly',()=>{
    it('renders the heading text',()=>{
        render(<Application/>)
        const pageHeading = screen.getByRole('heading',{level:1})

        expect(pageHeading).toBeInTheDocument()
    })
    it('renders the heading text',()=>{
        render(<Application/>)
        const pageHeading = screen.getByRole('heading',{level:2})

        expect(pageHeading).toBeInTheDocument()
    })
    it('renders name text box',()=>{
        render(<Application/>)
        const nameElement = screen.getByRole('textbox', {name:'Name'})
        expect(nameElement).toBeInTheDocument()
      
    })
    it('renders Bio text box',()=>{
        render(<Application/>)
        const nameElement = screen.getByRole('textbox', {name:'Bio'})
        expect(nameElement).toBeInTheDocument()
      
    })
    it('renders checkbox',()=>{
        render(<Application/>)
        const checkBox = screen.getByRole('checkbox')
        expect(checkBox).toBeInTheDocument()
      
    })
    it('renders submit button',()=>{
        render(<Application/>)
        const submitBtn = screen.getByRole('button')
        expect(submitBtn).toBeInTheDocument()
      
    })
    it.only('renders placeholder for name text area',()=>{
        render(<Application/>)
        const placeHolder = screen.getByPlaceholderText('Fullname')
        expect(placeHolder).toBeInTheDocument()
    })
    it.only('renders agreement text',()=>{
        render(<Application/>)
        const agreeTermsText = screen.getByText(/I Agree to the terms and Conditions/i)
        expect(agreeTermsText).toBeInTheDocument()
    })
    it.only('renders imput ele with value vishwas',()=>{
        render(<Application/>)
        const valueInpt = screen.getByDisplayValue(/vishwas/i)
        expect(valueInpt).toBeInTheDocument()
    })
    it('renders an image with specific alt text',()=>{
        render(<Application/>)
        const altText = screen.getByAltText(/a person with a laptop/i)
        expect(altText).toBeInTheDocument()
    })
    it('renders button with title close',()=>{
        render(<Application/>)
        const closeBtn = screen.getByTitle(/close-btn/i)
        expect(closeBtn).toBeInTheDocument()
    })
    it('renders div with test id custom-element',()=>{
        render(<Application/>)
        const divWithId = screen.getByTestId("custom-element")
        expect(divWithId).toBeInTheDocument()
    })
    it.only('renders with label text -Name',()=>{
        render(<Application/>)
        const nameText = screen.getByLabelText("Name", {selector: "input"})
        expect(nameText).toBeInTheDocument()
    })
    it.only('renders with label text -Name',()=>{
        render(<Application/>)
        const nameText = screen.getByLabelText("Name", {selector: "textarea"})
        expect(nameText).toBeInTheDocument()
    })
    it.only('renders the select element',()=>{
        render(<Application/>)
        const selectEl = screen.getByRole("combobox")
        expect(selectEl).toBeInTheDocument()
    })


})