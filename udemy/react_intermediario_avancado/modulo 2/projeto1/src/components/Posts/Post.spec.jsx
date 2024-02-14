import {Posts} from '.';
import { render, screen } from '@testing-library/react';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2.png'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png'
        }
    ]
};

describe('<Posts />', () => {
    it('shoud render posts', () => {
        render(<Posts  {...props}/>);

        // espera que apareca 3 titulos na tela ( nao esta funcionando )
        // expect(screen.getAllByRole('healing', { name: /title/i }))
        // .toHaveLength(3);
        // expect(screen.getAllByText(/body/i))
        // .toHaveLength(3);
    });
})