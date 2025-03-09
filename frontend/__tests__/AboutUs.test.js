import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from '../src/Pages/AboutUs';

describe('AboutUs', () => {
  test('render AboutUs title', () => {
    render(<AboutUs />);
    const title = screen.getByText(/About ECGenius/i);
    expect(title).toBeInTheDocument();
  });

    test('render AboutUs desc', () => {
        render(<AboutUs />);
        const description = screen.getByText(/ECGenius is an open-source mobile web application designed to aid clinicians and other healthcare professionals in interpreting electrocardiograms/i);
        expect(description).toBeInTheDocument();
    });

    test('render Our Team title', () => {
        render(<AboutUs />);
        const title = screen.getByText(/Our Team/i);
        expect(title).toBeInTheDocument();
    });
    test('render Our Team desc', () => {
        render(<AboutUs />);
        const title = screen.getByText(/ECGenius is developed in collaboration with medical and technology experts to enhance ECG interpretation for clinicians./i);
        expect(title).toBeInTheDocument();
    });

    test('render Project Lead title', () => {
        render(<AboutUs />);
        const title = screen.getByText(/Project Leads/i);
        expect(title).toBeInTheDocument();
    });
    
    test('render Project Lead desc', () => {
        render(<AboutUs />);
        // I prompted ChatGPT to ask how to handle <strong> tags when Jest testing.
        expect(screen.getByText(/This project is led by/i)).toBeInTheDocument();
        expect(screen.getByText(/Dr\. Moustafa Abdalla/i)).toBeInTheDocument();
        expect(screen.getByText(/Dr\. Mohamed Abdalla/i)).toBeInTheDocument();
    });

    test('render Dev Team title', () => {
        render(<AboutUs />);
        const title = screen.getByText(/Development Team/i);
        expect(title).toBeInTheDocument();
    });


    
    test('render Our Mission title', () => {
        render(<AboutUs />);
        const title = screen.getByText(/Our Mission/i);
        expect(title).toBeInTheDocument();
    });

    
    test('render Our Mission desc', () => {
        render(<AboutUs />);
        const title = screen.getByText(/Our goal is to improve the efficiency and accuracy of ECG interpretation by utilizing computational techniques to minimize variability and reduce the risk of diagnostic errors./i);
        expect(title).toBeInTheDocument();
    });

});