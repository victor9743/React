import { fireEvent, render, screen } from '@testing-library/react';
// import  userEvent from '@testing-library/user-event';
import { Button } from '.';
// describe('<Button />', () => {
//     it('should render the button with the text "Load more"', () => {
//        render(<Button texto="Load more" />);
//        const button =  screen.getByRole('button', { name: /load more/i });

//         // espera que o button esteja no document
//        expect(button).toBeInTheDocument();

//         // espera que no button possua a classe button
//         // expect(button).toHaveAttribute('class', 'button');

//         // espera que no minimo haja 1 asserção
//         expect.assertions(1);
//     });


//     it('should call function on button click', () => {
//         // cria uma função mock
//         const fn = jest.fn();

//         // passa a função criada via parametro para a props evento.
//         render(<Button texto="Load more" evento={fn} />);

//         // pega o elemento button
//         const button =  screen.getByRole('button', { name: /load more/i });

//         // aciona o evento de click
//         // fireEvent.click(button);
//         userEvent.click(button);
//         // espera que a função seja chamada ao menos 1 vez
//         expect(fn).toHaveBeenCalledTimes(1);
//     });

//     it('should be disabled when disabled is true', () => {
//         render(<Button texto="Load more" disabled={true} />);
//         // pega o elemento button
//         const button =  screen.getByRole('button', { name: /load more/i });

//         // espera que o button esteja desativado
//         expect(button).toBeDisabled();
//     });
    
// });

describe("<Button />" , () => {
    it('should render the button with text', () => {
        render(<Button texto="Load more" />);
        expect.assertions(1);

        const button = screen.getByRole("button", {name: /load more/i});
        expect(button).toBeInTheDocument();
        // expect(button).toHaveAttribute('class', 'button');
    });

    it("should call function on button click", () => {
        // cria uma função ficticia mock
        const fn = jest.fn();
        render(<Button texto="Load more" evento={fn} />);

        const button = screen.getByRole("button", {name: /load more/i});
        fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should be disabled when disabled is true", () => {
        render(<Button texto="Load more" disabled={true} />);

        const button = screen.getByRole("button", {name: /load more/i});
        fireEvent.click(button);

        expect(button).toBeDisabled();
    });
    
    // snapshot
    it("should match snapshot", () => {
        const {container} = render(<Button texto="Load more" disabled={true} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});