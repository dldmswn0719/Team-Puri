import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



// https://velog.io/@codns1223/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%EC%8B%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9C%84%EC%B9%98-%EC%83%81%EB%8B%A8%EC%9C%BC%EB%A1%9C-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0

/*1. React Router의 기본 동작과 브라우저의 기본 동작의 충돌
React Router를 사용할 때 페이지 이동 시 스크롤 위치가 원하는 대로 최상단으로 이동하지 않는 이유는, React Router의 기본 동작이 브라우저의 기본 동작과 충돌하기 때문이다.
일반적으로 브라우저에서는 페이지 이동 시에 스크롤 위치를 이전 위치로 유지하지 않고 새로운 페이지의 최상단으로 이동하는 기본 동작이 있다. 이러한 브라우저 기본 동작과 React Router의 동작이 충돌하면서 페이지 이동 시 스크롤 위치가 원하는 대로 조정되지 않는 현상이 발생한다.
React Router는 React 기반의 라우팅 라이브러리로, 페이지 이동을 처리하고 페이지 간의 상태 관리를 제공한다. 이때 페이지 이동 시에 브라우저의 기본 동작을 막고, React Router가 라우팅을 관리하도록 한다. 그러나 기본적으로는 스크롤 위치를 따로 처리하지 않기 때문에 스크롤 위치가 이동하지 않는 것이다.
2. React의 SPA 특성
React는 SPA로 동작하는 특성을 가지고 있다. SPA는 페이지 전환 없이 단일 페이지에서 애플리케이션의 모든 기능을 처리하는 웹 애플리케이션이다. SPA에서는 페이지 이동이 발생해도 실제로는 브라우저가 다른 페이지를 로드하는 것이 아니라, JavaScript를 사용하여 페이지의 일부만 변경하고 데이터를 가져와서 렌더링한다. 이로 인해 사용자가 페이지를 이동할 때 React Router와 같은 라우팅 라이브러리를 사용하여 처리되기 때문에, 페이지 간의 이동이 실제로는 단일 페이지 내에서 컴포넌트의 전환으로 이루어진다. 따라서 스크롤 위치가 변경되지 않고, 사용자가 스크롤을 내린 상태에서 다른 페이지로 이동하더라도 React는 브라우저의 페이지를 로드하지 않으므로 스크롤 위치가 그대로 유지되게 된다. */


export default function ScrollToTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        // console.log("스크롤");
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
}