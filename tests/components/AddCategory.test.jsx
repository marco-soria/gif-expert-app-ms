import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe('AddCategory Component', () => {
    test('should change the input', () => {
        // Arrange
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        // Act
        fireEvent.input(input, { target: { value: 'Satoru' }} );
        // Assert
        expect(input.value).toBe('Satoru');
    });

    test('should call onNewCategory if input has a value', () => {
        const inputValue = 'Satoru';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue }} );
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' }} );
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});