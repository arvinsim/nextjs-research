import React from 'react'
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import FireDisabled from "../../components/FireDisabled";



describe('FireDisabled', () => {
    it('fireEvent', () => {
        const consoleSpy = jest.spyOn(console, 'log')
        render(<FireDisabled />)

        fireEvent.click(screen.getByText('Fire'))
        expect(consoleSpy).toHaveBeenCalledWith('FIRE')
    })

    it('userEvent', async () => {
        const consoleSpy = jest.spyOn(console, 'log')
        const user = userEvent.setup()
        render(<FireDisabled />)

        await user.click(screen.getByText('Fire'))
        expect(consoleSpy).toHaveBeenCalledWith('FIRE')
    })
})