import { fetchApiProduct, fetchApiProductById } from "@/service/product";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery(page) {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchApiProduct(page),
        keepPreviousData: true,
        staleTime: 30 * 1000,      // 30s
        gcTime: 10 * 60 * 1000,    // 10 phút
        enabled: page > 0,
    });
}

export function useProductByIdQuery(id) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchApiProductById(id),
        enabled: !!id,
    });
}

// Cache:
// là một cơ chế lưu trữ tạm thời dữ liệu đã được truy vấn để có thể sử dụng lại mà không cần phải gọi lại API.
// Khi bạn truy vấn dữ liệu, React Query sẽ lưu trữ kết quả trong cache.
// Nếu bạn truy vấn cùng một dữ liệu lần nữa,
//  React Query sẽ trả về dữ liệu từ cache thay vì gọi lại API, giúp cải thiện hiệu suất và giảm tải cho server.
// - Dữ liệu sẽ được lưu trong cache sau khi truy vấn thành công.


// cache ở BE lưu dữ liệu ở server, còn cache ở FE lưu dữ liệu ở client (trình duyệt) để giảm thời gian truy cập và tải lại dữ liệu từ server.

// thời gian tươi (staleTime): là khoảng thời gian mà dữ liệu được coi là "tươi" và có thể sử dụng lại mà không cần phải gọi lại API.
// Nếu dữ liệu đã cũ (hết thời gian tươi),
// React Query sẽ tự động gọi lại API để lấy dữ liệu mới.