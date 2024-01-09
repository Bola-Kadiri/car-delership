import styled from 'styled-components';
import SubMenu from './SubMenu/SubMenu';
import { ReactNode } from 'react';

const SidebarNav = styled.nav`
  color: #000;
  width: 16%;
  display: flex;
  justify-content: center;
  position: sticky;
  margin-top: 70px;
  transition: 350ms;
  font-family: 'Inter';
  font-size: 15px;
`;

const SidebarWrap = styled.div`
  width: 100%;
  color: #000;
`;

interface SubNavItem {
  title: string | JSX.Element;
  path: string;

}

interface SidebarItem {
  title: string;
  iconClosed: ReactNode;
  iconOpened: ReactNode;
  subNav: SubNavItem[];
}

interface SidebarProps {
  data: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => (
  <>
    <SidebarNav>
      <SidebarWrap>
        {data.map((item, index: number) => (
          <SubMenu item={item} key={index} />
        ))}
      </SidebarWrap>
    </SidebarNav>
  </>
);

export default Sidebar;
