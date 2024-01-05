import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        // dando debug
        // const {debug} = render(<PostCard {...mock} />);
        // debug();


        render(<PostCard {...props} />);
        // verificar se existe o nome no documento
        // expect(screen.getByRole('img', {name: 'title 1'})).toBeInTheDocument();
    });
});

// criando um snapshot
describe('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
});