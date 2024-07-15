import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
    position: relative;
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

// export const Profile = styled(Link)`
//     display: flex;
//     align-items: center;
//     gap: 0.8rem;

//         img {
//             width: 56px;
//             height: 56px;
//             border-radius: 50%;
//         }

//         > div {
//             display: flex;
//             flex-direction: column;
//             align-items: flex-end;
//             justify-content: center;
//             margin-left: 16px;
//             line-height: 24px;

//             a {
//                 font-size: 14px;
//                 color: ${({ theme }) => theme.COLORS.GRAY_100};
//             }

//             strong {
//                 font-size: 18px;
//                 color: ${({ theme }) => theme.COLORS.WHITE};
            
//             }
//         }
// `;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
  }

  > div {
    margin-right: 0.9rem;
    font-size: 1.1rem;
    line-height: 1.8rem;

    height: 4rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 0 6.4rem;
    flex-grow: 1;
`;

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    /* display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem; */

    position: absolute;
    bottom: 1.8rem;
    right: 10.6rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 20px;

        display: flex;
        align-items: center;
    }
`