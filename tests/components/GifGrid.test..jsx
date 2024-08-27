import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
    const category = 'Jujutsu Kaisen'

    test('should show the loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show the items when the images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/satoru.jpg',
                title: 'Satoru'
            },
            {
                id: 'IJK',
                url: 'https://localhost/goku.jpg',
                title: 'Goku'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.queryByText('Cargando...')).toBeNull();
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });

});