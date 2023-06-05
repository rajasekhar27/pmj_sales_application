import { useEffect, useState, cloneElement, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
function InfiniteScrollComponent({
  lazyHook,
  loaderMessage,
  endMessage,
  height,
  customLoader,
  customEnd,
  children,
  loopKey,
  clearParent,
  parentClasses,
  hookParams,
  emptyHandler,
  dataLooper,
  isOver,
}) {
  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [finalData, setFinalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0);
  const [lazyHookTrigger, { isFetching, isLoading }] = lazyHook();
  const isInitialMount = useRef(true);

  const clearData = () => {
    setHasMore(false);
    setFinalData([]);
    setCurrentPage(1);
    setPageOffset(0);
    lazyHookTrigger(
      hookParams
        ? {
            limit: itemsPerPage,
            offset: 0,
            ...hookParams,
          }
        : {
            limit: itemsPerPage,
            offset: 0,
          }
    ).then((res) => {
      if (res.data) {
        const data = [...res?.data?.results];
        setFinalData(data);
        if (!res.data?.next) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      }
    });
  };

  useEffect(() => {
    isOver && isOver(!hasMore);
  }, [hasMore]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      clearData();
    }
  }, [JSON.stringify(hookParams)]);

  const fetchData = (data) => {
    const nextOffset = currentPage * itemsPerPage;

    setPageOffset(nextOffset);
    setCurrentPage(currentPage + 1);
    lazyHookTrigger(
      hookParams
        ? {
            limit: itemsPerPage,
            offset: nextOffset,
            ...hookParams,
          }
        : {
            limit: itemsPerPage,
            offset: nextOffset,
          }
    ).then((res) => {
      if (res.data) {
        const data = [...finalData, ...res?.data?.results];
        setFinalData(data);
        if (!res.data?.next) {
          setHasMore(false);
        }
      }
    });
  };

  useEffect(() => {
    lazyHookTrigger(
      hookParams
        ? {
            limit: itemsPerPage,
            offset: pageOffset,
            ...hookParams,
          }
        : {
            limit: itemsPerPage,
            offset: pageOffset,
          }
    ).then((res) => {
      if (res.data) {
        const data = [...finalData, ...res?.data?.results];
        setFinalData(data);
        if (!res.data?.next) {
          setHasMore(false);
        }
      }
    });
  }, []);

  return (
    <InfiniteScroll
      dataLength={finalData.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={isLoading || isFetching || hasMore ? customLoader : ""}
      endMessage={
        customEnd ? (
          customEnd
        ) : (
          <EndMessage
            endMessage={endMessage}
            isFetching={isFetching}
            isLoading={isLoading}
          />
        )
      }
      height={height ? height : 600}
      className="pb-20"
    >
      <div
        className={`${
          clearParent
            ? parentClasses
            : `flex flex-col  pb-5 ${parentClasses} ${
                finalData?.length === 0 ? "grid grid-cols-1 gap-0" : ""
              } `
        }`}
      >
        {finalData?.length === 0 ? (
          <div className="">
            {!isFetching &&
              !isLoading &&
              (emptyHandler ? (
                emptyHandler
              ) : (
                <div className="w-full flex justify-center">
                  <p className="self-center">No Data</p>
                </div>
              ))}
          </div>
        ) : (
          finalData?.map((d, idx) => {
            return cloneElement(children, {
              data: d,
              idx: idx,
              key: loopKey ? loopKey(d) : idx,
              dataLength: finalData.length,
              clearData: clearData,
            });
          })
        )}
      </div>
    </InfiniteScroll>
  );
}

const Loader = ({ loaderMessage }) => {
  return <h4>{loaderMessage ? loaderMessage : "Loading..."}</h4>;
};

const EndMessage = ({ endMessage, isFetching, isLoading }) => {
  return isFetching || isLoading ? (
    ""
  ) : (
    <div style={{ textAlign: "center" }}>
      <b>
        <div className="flex justify-center">
          <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
          <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
          <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full"></p>
        </div>
      </b>
    </div>
  );
};
// InfiniteScrollComponent.whyDidYouRender = true;
export default InfiniteScrollComponent;
