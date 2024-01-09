import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


interface SidebarItem {
  path: string;
  icon: JSX.Element;
  iconClosed: JSX.Element;
  iconOpened: JSX.Element;
  title: string;
  subNav?: SidebarItem[];
}

interface SubMenuProps {
  item: SidebarItem;
}

const SidebarLink=styled(Link)`
display: flex;
color: #000;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
list-style: none;
width: 100%;
text-decoration: none;
font-size: 16px;
font-family: 'Inter'; 
`

const SidebarLabel = styled.span`
margin-left: 16px;
color: #000;
`;


const SidebarLabels = styled.span`
  margin-left: 16px;
  color: #000;
  font-size: 14px
`;

const DropdownLinks = styled(Link)`
  color: #000;
  width: 100%;
  padding-left: 3rem;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Inter'; /* Make sure to enclose font name in quotes */

  &:hover {
    cursor: pointer;
  }
`;

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={"#"} onClick={item.subNav ? showSubnav : undefined}>
        <div style={{ width: '100%' }}>
          
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconClosed : item.subNav ? item.iconOpened : null}
        </div>
      </SidebarLink>
      <div style={{ marginTop: '-19px', marginBottom: '15px', color: '#000' }}>
        {subnav &&
          item.subNav &&
          item.subNav.map((subItem, index) => (
            <div style={{ padding: '15px 0px' }} key={index}>
              <DropdownLinks to={subItem.path}>
                <SidebarLabels>
                  <span>{subItem.title}</span>
                </SidebarLabels>
              </DropdownLinks>
              <div style={{ width: '100%', marginTop: '-5px' }}></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SubMenu;