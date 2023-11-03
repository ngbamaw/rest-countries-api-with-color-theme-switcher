import styled from "styled-components";

const RestCountriesPage = styled.div`
    font-family: "Nunito Sans", sans-serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    button {
        border: none;
        background: none;
        font-family: inherit;
        color: inherit;
    }
    header {
        padding: 1rem 4rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        background-color: ${({ theme }) => theme.element};
        @media screen and (max-width: 600px) {
            padding: 1rem 2rem;
        }
        display: flex;
        h1 {
            font-weight: 800;
            font-size: 1.5rem;
            @media screen and (max-width: 600px) {
                font-size: 1rem;
            }
        }
        .theme-switcher {
            margin-left: auto;
            font-weight: 600;
            color: ${({ theme }) => theme.text};
        }
    }
    .search-box {
        display: flex;
        margin-bottom: 4rem;
        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
            gap: 4rem;
        }
        .search-input {
            padding: 1rem;
            width: 20rem;
            display: flex;
            @media screen and (max-width: 768px) {
                width: 100%;
            }
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
            border-radius: 0.3rem;
            background-color: ${({ theme }) => theme.element};
            .search-icon {
                margin-right: 1rem;
                color: ${({ theme }) => theme.input};
            }
            input {
                border: none;
                width: 100%;
                outline: none;
                background-color: inherit;
                color: ${({ theme }) => theme.text};
                &::placeholder {
                    color: ${({ theme }) => theme.input};
                }
            }
        }
        .filter {
            padding: 1rem;
            position: relative;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
            border-radius: 0.3rem;
            width: fit-content;
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 2rem;
            background: none;
            border: none;
            background-color: ${({ theme }) => theme.element};
            color: ${({ theme }) => theme.text};

            @media screen and (max-width: 768px) {
                margin-left: 0;
            }
            .filter-value {
            }
            .my-node-enter {
                opacity: 0;
            }
            .my-node-enter-active {
                opacity: 1;
                transition: opacity 200ms;
            }
            .my-node-exit {
                opacity: 1;
            }
            .my-node-exit-active {
                opacity: 0;
                transition: opacity 200ms;
            }
            .filter-list {
                position: absolute;
                display: none;
                top: 110%;
                left: 0;
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
                width: 100%;
                background-color: inherit;
                display: flex;
                flex-direction: column;
                color: inherit;
                border-radius: 0.3rem;
                li {
                    list-style: none;
                    &.selected {
                        background-color: #f5f5f5;
                    }
                    button {
                        width: 100%;
                        padding: 1rem;
                        border: none;
                        background: none;
                        text-align: left;
                        color: inherit;
                    }
                }
            }
        }
    }
`;

export const StyledListCountries = styled.main`
    padding: 4rem;

    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
    .countries {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;

        @media screen and (max-width: 768px) {
            padding: 1rem;
        }
        .empty-slot {
            min-width: 20rem;
            flex: 1;
        }
        .country {
            display: flex;
            flex-direction: column;
            text-align: inherit;
            border: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
            border-radius: 0.3rem;
            min-width: 20rem;
            flex: 1;

            @media screen and (max-width: 768px) {
                min-width: 10rem;
            }
            overflow: hidden;
            background-color: ${({ theme }) => theme.element};
            &:hover {
                cursor: pointer;
            }
            .flag {
                aspect-ratio: 16/9;
                width: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            .country-info {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                color: ${({ theme }) => theme.text};
                h2 {
                    margin-bottom: 1rem;
                }
                .label {
                    font-weight: 800;
                }
            }
        }
    }
`;

export const StyledCountry = styled.main`
    padding: 4rem;
    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
    .btn-back {
        padding: 0.5rem 2rem;
        margin-bottom: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border: none;
        background: ${({ theme }) => theme.background};
        border-radius: 0.3rem;
    }

    .country {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .flag {
            aspect-ratio: 16/9;
            max-width: 50%;
            align-self: center;
            @media screen and (max-width: 768px) {
                max-width: 100%;
            }
        }
        .country-info {
            display: flex;
            flex-direction: column;
            max-width: 50%;
            padding: 4rem;
            justify-content: center;
            @media screen and (max-width: 768px) {
                padding: 2rem 0;
                max-width: 100%;
            }
            h2 {
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            .fields {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                .fields-left {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .fields-right {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .field {
                    .label {
                        font-weight: 800;
                    }
                }
                margin-bottom: 5rem;
            }
            .border-countries {
                flex-wrap: wrap;
                .label {
                    font-weight: 800;
                    @media screen and (max-width: 768px) {
                        width: 100%;
                    }
                }
                display: flex;
                align-items: center;
                gap: 1rem;
                .border-country {
                    padding-block: 0.2rem;
                    border-radius: 0.1rem;
                    height: fit-content;
                    width: 6rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
`;

export default RestCountriesPage;
